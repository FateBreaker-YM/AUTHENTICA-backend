import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImageUpload = ({ onImagePicked }) => {
  const [image, setImage] = useState(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
        onImagePicked(response.assets[0]);
      }
    });
  };

  return (
    <View>
      <Button title="Pick an Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
    </View>
  );
};

export default ImageUpload;
