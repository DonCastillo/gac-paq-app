import { StyleSheet, View } from "react-native";
import React from "react";
import type { SvgProps } from "react-native-svg";

interface GenericBackgroundStrokePropsInterface {
    strokeSVG: any;
    strokeSVGLg: any;
}

export default function GenericBackgroundStroke({strokeSVG, strokeSVGLg}: GenericBackgroundStrokePropsInterface): React.ReactElement {
    // const [StrokeSVGComponent, setStrokeSVGComponent] = React.useState<SvgProps>(strokeSVG);
    const StrokeSVGComponent = strokeSVG
    console.log("inside GenericBackgroundStroke: ");
    // console.log("stroke: ", stroke);
    // console.log("stroke lg: ", strokeLg);
    console.log("strokeSVG: ", strokeSVG);
    return (
        <View style={styles.container}>
            <StrokeSVGComponent width={"100%"} style={styles.greenStroke}/>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
	},
    greenStroke: {
        position: "absolute",
        bottom: "20%",
        left: "0%",
        right: "0%",
        transform: [{ scale: 1.2 }],
    }
});
