import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ExpoDraw from "expo-draw";
import { captureRef as takeSnapshotAsync } from "react-native-view-shot";
const DrawSignatureScreen = () => {
  const [strokes, setStrokes] = useState(null);

  const signatureRef = React.useRef(null);
  async function clearCanvas() {
    signatureRef.current.clear();
  }
  async function saveCanvas() {
    try {
      const signature_result = await takeSnapshotAsync(signatureRef.current, {
        format: "jpg", // 'png' also supported
        quality: 0.5, // quality 0 for very poor 1 for very good
        result: "tmpfile", //
      });
      // call shipmentservice to save the signature
   
      console.log("signature file ", signature_result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{}}>Enter your signature here</Text>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ExpoDraw
          strokes={[]}
          ref={signatureRef}
          containerStyle={{
            backgroundColor: "rgba(0,0,0,0.01)",
            height: 300,
            width: 500,
          }}
          rewind={(undo) => console.log("undo", undo)}
          clear={(clear) => console.log("clear", clear)}
          color={"#000000"}
          strokeWidth={4}
          enabled={true}
          onChangeStrokes={(strokes) => setStrokes(strokes)}
        />
        <View
          style={{
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              padding: 10,
              height: 50,
              borderRadius: 10,
              backgroundColor: "green",
              alignItems: "center",
            }}
            onPress={clearCanvas}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              padding: 10,
              height: 50,
              borderRadius: 10,
              backgroundColor: "green",
              alignItems: "center",
            }}
            onPress={() => saveCanvas()}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
              }}
            >
              Sign
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawSignatureScreen;
