import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
    },
    location_and_job_container:{
        flexDirection:"row",
        marginVertical:5,
        
    },
    location_and_job_text:{
        fontWeight:"bold",
        fontSize:15,
        color:"#ef5350",
        marginRight:5,
    },
    level_locations_text:{
        fontWeight:"bold",
    },
    job_name:{
        color:"#37474f",
        fontSize:25,
        fontWeight:"bold",
    },
    detail_text:{
        fontWeight:"bold",
        color:"#37474f",
        fontSize:22,
    },

    detail_text_container:{
        alignItems:"center",
        marginTop:15
    },
    content_container:{
        marginBottom:5,
    },
    footer_container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
    }
})