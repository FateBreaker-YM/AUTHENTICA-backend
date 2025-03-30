import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { createUser } from '../services/api';
import ImageUpload from '../components/ImageUpload';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [departmentImg, setDepartmentImg] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('country', country);
    formData.append('state', state);
    formData.append('department_name', departmentName);
    formData.append('department_id', departmentId);
    formData.append('phone_number', phoneNumber);
    formData.append('email', email);
    formData.append('verification_code', verificationCode);
    if (departmentImg) {
      formData.append('department_img', {
        uri: departmentImg.uri,
        name: departmentImg.fileName,
        type: departmentImg.type,
      });
    }

    try {
      const response = await createUser(formData);
      setMessage('User created successfully!');
      console.log('Response:', response);
    } catch (error) {
      setMessage('Error creating user');
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        placeholder="Department Name"
        value={departmentName}
        onChangeText={setDepartmentName}
      />
      <TextInput
        placeholder="Department ID"
        value={departmentId}
        onChangeText={setDepartmentId}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      <ImageUpload onImagePicked={(image) => setDepartmentImg(image)} />

      <Button title="Submit" onPress={handleSubmit} />
      {message && <Text>{message}</Text>}
    </View>
  );
};

export default RegisterScreen;
