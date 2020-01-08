import React, {useState} from 'react';
import { connect } from 'react-redux'
import {uploadImage} from '../store/actions/actions'

export const SaveImg=(props)=>{
const [savedImg, setSavedImg] = useState("https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg");


    return(
        <>

        
        
        </>
    );
}

const mapStateToProps = state => {
	return{
		meme_url: state.memeReducer.meme.meme_url,

	}
}

export default connect(mapStateToProps, {SaveImg, uploadImage}) (SaveImg);