import {shadingMedium, ShadingPart} from "../draw/shading_part";
import {Layer} from "../util/canvas";
import {Part, BodyPart} from "./part";
import {
    adjustPoints,
    extractPoint,
    adjust,
    breakPoint,
    reverseDrawPoint,
    splitCurve,
    continueCurve,
    clamp,
    none
} from "drawpoint";
import {connectEndPoints} from "..";

class LeftBreastShading extends ShadingPart {
    constructor(...data) {
        super({
            loc       : "chest",
            layer     : Layer.GENITALS,
            forcedSide: Part.LEFT,
        }, ...data);
    }

    fill() {
        return shadingMedium;
    }

    calcDrawPoints(ex) {
        if (ex.hasOwnProperty("breast") === false) {
            return [];
        }
        const top = {
            x: ex.breast.cleavage.x + 0.5,
            y: ex.breast.cleavage.y + this.breastSize * 0.4
        };
        const bot = extractPoint(ex.breast.bot);

        // inner to top
        top.cp1 = continueCurve(ex.breast.in, ex.breast.cleavage);


        bot.cp1 = {
            x: top.x,
            y: top.y * 0.3 + bot.y * 0.7
        };
        bot.cp2 = {
            x: bot.x - 6 + this.breastSize * 0.32,
            y: bot.y + 7
        };

        return [bot, ex.breast.in, ex.breast.cleavage, top, bot];
    }
}

class LeftBreastUnderShading extends ShadingPart {
    constructor(...data) {
        super({
            loc       : "+chest",
            layer     : Layer.FRONT,
            forcedSide: Part.LEFT,
        }, ...data);
    }

    calcDrawPoints(ex) {
        if (ex.hasOwnProperty("breast") === false) {
            return [];
        }
        const top = {
            x: ex.breast.cleavage.x + 0.5,
            y: ex.breast.cleavage.y + this.breastSize * 0.4
        };
        const bot = extractPoint(ex.breast.bot);

        // inner to top
        top.cp1 = continueCurve(ex.breast.in, ex.breast.cleavage);


        const cleavage = extractPoint(ex.breast.cleavage);
        cleavage.x -= this.breastSize * 0.05;
        cleavage.y -= this.breastSize * 0.02;
        cleavage.cp1 = {
            x: top.x * 1.0 + cleavage.x * 0.0,
            y: top.y - this.breastSize * 0.02
        };
        cleavage.cp2 = {
            x: cleavage.x,
            y: cleavage.y * 0.5 + top.y * 0.5
        };

        bot.cp1 = {
            x: cleavage.x - this.breastSize * 0.02,
            y: cleavage.y - this.breastSize * 0.3 - 5
        };
        bot.cp2 = {
            x: bot.x - 2 - this.breastSize * 0.05,
            y: bot.y - 2 - this.breastSize * 0.03
        };

        return [bot, ex.breast.in, ex.breast.cleavage, top, cleavage, bot];
    }
}

class RightBreastShading extends ShadingPart {
    constructor(...data) {
        super({
            loc       : "chest",
            layer     : Layer.GENITALS,
            forcedSide: Part.RIGHT,
        }, ...data);
    }

    fill() {
        return shadingMedium;
    }

    calcDrawPoints(ex) {
        if (ex.hasOwnProperty("breast") === false) {
            return [];
        }
        const bot = extractPoint(ex.breast.bot);

        const [tip, cp1, cp2] = adjustPoints(-this.breastSize * 0.25,
            0,
            ex.breast.tip,
            ex.breast.bot.cp1,
            ex.breast.bot.cp2);
        bot.cp1 = cp1;
        bot.cp2 = cp2;

        const [outTip, outTop] = adjustPoints(this.breastSize * 0.1,
            -this.breastSize * 0.12,
            reverseDrawPoint(ex.breast.tip, ex.breast.bot),
            reverseDrawPoint(ex.breast.top, ex.breast.tip));
        outTop.x = ex.breast.top.x;
        outTop.y = ex.breast.top.y;

        return [
            ex.breast.top,
            tip,
            bot,
            outTip,
            outTop
        ];
    }
}

class RightBreastUnderShading extends ShadingPart {
    constructor(...data) {
        super({
            loc       : "+chest",
            layer     : Layer.ARMS,
            forcedSide: Part.RIGHT,
        }, ...data);
    }

    calcDrawPoints(ex) {
        if (ex.hasOwnProperty("breast") === false) {
            return [];
        }

        const tip = adjust(ex.breast.tip,
            this.breastSize * 0.045,
            -this.breastSize * 0.07);
        const bot = extractPoint(ex.breast.bot);
        bot.cp1 = continueCurve(ex.breast.top, tip, 1.5);
        bot.cp2 = {
            x: bot.x + this.breastSize * 0.09,
            y: bot.y - 1 - this.breastSize * 0.1
        };

        const breastFullThreshold = 10;
        if (this.breastSize < breastFullThreshold) {
            const breastLack = breastFullThreshold - this.breastSize;
            top.cp1 = adjust(top.cp1, -breastLack * 0.5, breastLack * 0.5);
            top.cp2 = adjust(top.cp2, -breastLack * 0.7, breastLack * 0.4);
        }

        return [
            ex.breast.top,
            tip,
            bot,
            reverseDrawPoint(ex.breast.tip, ex.breast.bot),
            reverseDrawPoint(ex.breast.top, ex.breast.tip)
        ];
    }
}

 
class Chest extends BodyPart {
    constructor(...data) {
        super({
            loc       : "chest",
            reflect   : true,
            layer     : Layer.GENITALS,
            aboveParts: ["parts torso", "decorativeParts torso", "arm"]
        }, ...data);
    }
}

export class BimboChest extends Chest {
    constructor(...data) {
        super({
            shadingParts: [
                LeftBreastShading,
                LeftBreastUnderShading,
                RightBreastShading,
                // RightBreastUnderShading
            ]
        }, ...data);
    }

    calcDrawPoints(ex, mods, calculate) {


        if (this.breastSize < 0) {
            return [];
        }

        //const breastFullThreshold = 10;
		const breastFullThreshold = 2;
        if (calculate) {

            const breast = ex.breast = {};
            let breastFullness = (this.breastSize - breastFullThreshold);
			//if (breastFullness > 0) breastFullness = breastFullness * 4;


            breast.top = {
                //x: ex.armpit.x - 2.2 + this.breastSize * 0.02,
				x: ex.armpit.x - 2.2 + this.breastSize * 0.03,
                //y: ex.armpit.y + 0.5 + this.height * 0.023 - this.breastSize * 0.05,
				y: ex.armpit.y + 0.5 + this.height * 0.023 + this.breastSize * 0.05
            };

            if (this.breastSize < breastFullThreshold) {
                breast.top.x += breastFullness * 0.1;
            }

            // scales with greater fullness
            let breastDroopiness = Math.pow(clamp(breastFullness - mods.breastPerkiness,
                0,
                100), 2) * 0.006;

            breast.center = {
               // x: ex.armpit.x - 3 + breastFullness * 0.02 + breastDroopiness * 0.02,
			   x: ex.armpit.x - 3 + breastFullness * 0.06 + breastDroopiness * 0.02,
               //y: breast.top.y - 6 - breastFullness * 0.03 - breastDroopiness + mods.breastPerkiness * 0.02
			   y: breast.top.y - 6 - breastFullness * 0.09 - breastDroopiness + mods.breastPerkiness * 0.02
            };


            // until breast becomes full, increasing breast size simply makes it fuller
            // rather than increasing its size
            breastFullness = Math.max(0, breastFullness);


            breast.tip = {
               // x  : breast.center.x + 3.3 + breastFullness * 0.07 + mods.breastPerkiness * 0.04,
			    x  : breast.center.x + 3.3 + breastFullness * 0.28 + mods.breastPerkiness * 0.04,
                y  : breast.center.y +
                     mods.breastPerkiness * 0.07,
                cp1: {
                    //x: breast.top.x + 2 + breastFullness * 0.07 - breastDroopiness * 0.5,
					x: breast.top.x + 2 + breastFullness * 0.21 - breastDroopiness * 0.5,
                    y: breast.top.y - 3 +
                       clamp(mods.breastPerkiness * 0.15, -4, 4) -
                       breastDroopiness * 0.7
                }
            };

            breast.tip.cp2 = {
                x: breast.tip.x - breastDroopiness * 0.1,
                //y: breast.tip.y + 2 + breastFullness * 0.07
				y: breast.tip.y + 2 + breastFullness * 0.21
            };

            breast.bot = {
                //x: breast.center.x - 1.5 + breastFullness * 0.01,
				x: breast.center.x - 1.5 + breastFullness * 0.03,
                //y: breast.center.y - 3.8 - breastFullness * 0.08 - breastDroopiness * 0.05 + mods.breastPerkiness * 0.08,
				y: breast.center.y - 3.8 - breastFullness * 0.24 - breastDroopiness * 0.05 + mods.breastPerkiness * 0.08,
            };
            breast.bot.cp1 = continueCurve(breast.top, breast.tip,
                clamp(0.6 + breastDroopiness * 0.05, 0, 1));
            breast.bot.cp2 = {
               // x: breast.bot.x + 3.5 + breastFullness * 0.05,
			   x: breast.bot.x + 3.5 + breastFullness * 0.15,
                y: breast.bot.y
            };

			
            // only start showing up when breastSize > 15
            breast.cleavage = {
                x: 0.5,
                y: breast.tip.y,
            };
            breast.cleavage.cp1 = continueCurve(breast.tip, breast.bot);

            breast.cleavage.cp2 = {
                x: breast.cleavage.x,
                //y: breast.cleavage.y - 2.5 - breastFullness * 0.05
				y: breast.cleavage.y - 2.5 - breastFullness * 0.15
            };

            let sp = splitCurve(clamp((breastFullness + 5) / 30, 0, 1),
                breast.bot,
                breast.cleavage);
            breast.in = sp.left.p2;
            breast.cleavage = sp.right.p2;
        }


        const sp = splitCurve(clamp(1 - (this.breastSize * 3) / breastFullThreshold, 0, 1), ex.breast.top,
            ex.breast.tip);
        const top = sp.right.p1;
        ex.breast.tip = sp.right.p2;
        ex.breast.top = connectEndPoints(ex.breast.cleavage, top);
		
		//da.tracePoint(top);
		//da.tracePoint(ex.breast.top);
		//da.tracePoint(ex.breast.tip);
		//da.tracePoint(ex.breast.bot);
		//da.tracePoint(ex.breast.in);
		//da.tracePoint(ex.breast.cleavage);
        return [
            breakPoint,
            // ex.breast.top,
            top,
            ex.breast.tip,
            ex.breast.bot,
            ex.breast.in,
            ex.breast.cleavage,
            ex.breast.top,
        ];
    }
}


export class BimboNipples extends Chest {
    constructor(...data) {
        super({
            fill      : none,
            loc       : "+chest",
            aboveParts: ["parts chest", "decorativeParts chest"],
        }, ...data);
    }

    strokeClip() {

    }

    stroke(ignore, ex) {
        return ex.baseLipColor;
    }

    getLineWidth(avatar) {
        return avatar.dim.breastSize * 0.05 + avatar.dim.areolaSize * 0.1;
    }

    calcDrawPoints(ex, mods, calculate) {
        ex.chest = ex.chest || {};
        if (calculate) {
            if (ex.breast) {
                ex.chest.nipples = {
                    x: ex.breast.center.x - 1.5 + this.breastSize * 0.14,
                    y: ex.breast.tip.y - this.breastSize * 0.12 + mods.breastPerkiness * 0.1
                };

                // draw relative to armpit
            } else {
                ex.chest.nipples = {
                    x: ex.armpit.x - 5 - this.upperMuscle * 0.08,
                    y: ex.armpit.y - 3,
                };
            }
        }
        return [breakPoint, ex.chest.nipples];
    }
}

