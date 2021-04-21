//importar react
import React from 'react'; 
//import libreria stack
import { createStackNavigator } from '@react-navigation/stack';

//importamos nuesto componente de CoinsScreen 
import CoinsScreen from './CoinsScreen';

//declarar constante para stack
const Stack = createStackNavigator();
//import el componente CoinDetailsScreen
import CoinDetailsScreen from './CoinDetailsScreen';

//empez<mos a construir nuesto componente de tipo stalles

const CoinsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Code Pineapple"  
            component={CoinsScreen}
            />   
         <Stack.Screen 
            name="Categorias"  
            component={CoinDetailsScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;