import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const App = () => {
  const [currentColor, setCurrentColor] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  const colors = ["#7EBDC2", "#A6E6F0", "#F0F0C2", "#FF7E67", "#FFE4E1"];

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/200/300");
      const imageUrl = response.url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentColor((currentColor + 1) % colors.length);
        fetchRandomImage();
      }}
      style={[styles.container, { backgroundColor: colors[currentColor] }]}
    >
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
});

export default App;
