import {AsianBunBack, AsianBunFront} from "./asian_bun";
import {CurlyTailFront, CurlyTailMedium} from "./curly_tail";
import {HimeCutBack, HimeCutFront, HimeCutSide} from "./hime_cut";
import {StraightFront, StraightSideBang, StraightBack, StraightFrontShine} from "./straight";
import {SideHighTailTail, SideHighTailFront} from "./side_high_tail";
import {HimeCurlMedium, HimeCurlSide} from "./hime_curl";

/**
 * Index table of all hair types.
 * @memberof module:Hair
 * @type {module:HairPart[]}
 */
export const styles = [
    [/* bald */],
    [
        AsianBunFront,
        AsianBunBack
    ],
    [
        CurlyTailFront,
		CurlyTailMedium,

    ],
    [
        HimeCutFront,
        HimeCutBack,
        HimeCutSide,
    ],
    [
        StraightFront,
        StraightSideBang,
        StraightBack,
        StraightFrontShine,
    ],
    [
        SideHighTailFront,
        SideHighTailTail,
    ],
    [
        HimeCutFront,
        HimeCurlMedium,
        HimeCurlSide,
    ],
	[
		SideHighTailFront
	]
];
