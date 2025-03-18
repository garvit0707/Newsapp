import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const teeth = [
    { id: 1, d: "M10 10 L20 10 L20 20 L10 20 Z" },
    { id: 2, d: "M25 10 L35 10 L35 20 L25 20 Z" },
    { id: 3, d: "M40 10 L50 10 L50 20 L40 20 Z" },
    { id: 4, d: "M55 10 L65 10 L65 20 L55 20 Z" },
    { id: 5, d: "M70 10 L80 10 L80 20 L70 20 Z" },
    { id: 6, d: "M85 10 L95 10 L95 20 L85 20 Z" },
    { id: 7, d: "M100 10 L110 10 L110 20 L100 20 Z" },
    { id: 8, d: "M115 10 L125 10 L125 20 L115 20 Z" },
    { id: 9, d: "M130 10 L140 10 L140 20 L130 20 Z" },
    { id: 10, d: "M145 10 L155 10 L155 20 L145 20 Z" },
    { id: 11, d: "M160 10 L170 10 L170 20 L160 20 Z" },
    { id: 12, d: "M175 10 L185 10 L185 20 L175 20 Z" },
    { id: 13, d: "M190 10 L200 10 L200 20 L190 20 Z" },
    { id: 14, d: "M205 10 L215 10 L215 20 L205 20 Z" },
    { id: 15, d: "M220 10 L230 10 L230 20 L220 20 Z" },
    { id: 16, d: "M235 10 L245 10 L245 20 L235 20 Z" },
];

const wantToGetTreated = [1, 2, 3, 14, 15];
const previouslyTreated = [6, 7];

const ToothChart = () => {
  const [selectedTeeth, setSelectedTeeth] = useState([]);

  const handleToothPress = (id) => {
    setSelectedTeeth((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total {wantToGetTreated.length + previouslyTreated.length} teeth require treatment</Text>

      <Svg width={400} height={500} viewBox="0 0 250 100">
        {teeth.map((tooth) => {
          let fillColor = "#fff"; 
          if (wantToGetTreated.includes(tooth.id)) fillColor = "#AFCBFF";
          if (previouslyTreated.includes(tooth.id)) fillColor = "#FFD580";
          if (selectedTeeth.includes(tooth.id)) fillColor = "#FF5733";

          return (
            <Path
              key={tooth.id}
              d={tooth.d}
              fill={fillColor}
              stroke="black"
              strokeWidth={1}
              onPress={() => handleToothPress(tooth.id)}
            />
          );
        })}
      </Svg>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#AFCBFF" }]} />
          <Text>Want to get treated</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: "#FFD580" }]} />
          <Text>Previously treated</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 30 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  legend: { flexDirection: "row", marginTop: 20 },
  legendItem: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  legendColor: { width: 15, height: 15, marginRight: 5, borderRadius: 10 },
});

export default ToothChart;