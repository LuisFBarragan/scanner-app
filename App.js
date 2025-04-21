// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Modal, Button } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as FileSystem from 'expo-file-system';
// import ImageView from "react-native-image-viewing";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Fotos from 'Vistas/Fotos.js';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const [isCameraReady, setIsCameraReady] = useState(false);
//   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
//   const [capturedImages, setCapturedImages] = useState([]);
//   const [visibleImageIndex, setVisibleImageIndex] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalPhotoName, setModalPhotoName] = useState('');
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState('Aun no se ha escaneado nada');

//   let cameraRef = null;
//   const handleOpenCamera = () => {
//     setShowCamera(true);
//   };

//   const handleCloseCamera = () => {
//     setShowCamera(false);
//   };

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View>
//         <Text>Permisos de cámara</Text>
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View>
//           <Text>No se ha otorgado permiso para acceder a la cámara.</Text>
//           <Button title={'Allow Camera'} onPress={(useEffect)}></Button>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   const handleBarCodeScanned = ({type, data}) => {
//     setScanned(true);
//     setText(data);
//     console.log('Type: ' + type + '\nData ' + data)
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <Text>A ver al cine:</Text>
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={Fotos.handleCameraType}>
//           <Text style={styles.buttonText}>Fotos</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={}>
//           <Text style={styles.buttonText}>Escanner</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 5,
//   },
//   closeButton: {
//     backgroundColor: 'red',
//     padding: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   galleryContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryImage: {
//     width: 100,
//     height: 100,
//     resizeMode: 'cover',
//     borderRadius: 5,
//     margin: 5,
//   },
//   openCameraButton: {
//     position: 'absolute',
//     alignSelf: 'center',
//     bottom: 20,
//     backgroundColor: 'lightblue',
//     padding: 15,
//     borderRadius: 5,
//   },
//   openScannerButton: {
//     backgroundColor: 'light',
//     padding: 10,
//     borderRadius: 5,
//     alignSelf: 'flex-end',
//   },
//   openCameraButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   imageViewer: {
//     flex: 1,
//     height: Dimensions.get('window').height,
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     padding: 10,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   imageCounterText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   modalBox: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalButton: {
//     backgroundColor: 'lightblue',
//     padding: 10,
//     borderRadius: 5,
//     alignSelf: 'flex-end',
//   },
//   modalButton2: {
//     backgroundColor: 'light',
//     padding: 10,
//     borderRadius: 5,
//     alignSelf: 'flex-end',
//   },
//   modalButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ListItem } from 'react-native-elements';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [scannedItems, setScannedItems] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    setScannedItems(prevItems => [...prevItems, data]);
    console.log(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData('');
  };

  if (hasPermission === null)
    return <Text>Esperando el permiso de la cámara...</Text>;

  if (hasPermission === false)
    return <Text>No se tiene acceso a la cámara</Text>;

  return (
    <View style={styles.container}>
      {scanned ? (
        <>
          <Text style={styles.dataText}>Código escaneado:</Text>
          <Text style={styles.data}>{scannedData}</Text>
          <Button title="Escanear nuevamente" onPress={handleScanAgain} />
        </>
      ) : (

        <BarCodeScanner
          style={styles.scanner}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      )}

      <View style={styles.listContainer}>
        <Text style={styles.listHeading}>Códigos escaneados:</Text>
        {scannedItems.map((item, index) => (
          <ListItem key={index} >
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
  },
  dataText: {
    fontSize: 20,
    marginTop: 80,
  },
  data: {
    fontSize: 16,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    marginTop: 5,
    paddingHorizontal: 16,
  },
  listHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});