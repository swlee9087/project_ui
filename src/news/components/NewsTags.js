import React from 'react'
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

// const Data=[
//     {value:'Seoul', count:54},
//     {value:'Jeju', count:86},
//     {value:'China', count:95},
//     {value:'USA', count:76},
//     {value:'Japan', count:89},]

const Tags = () => (
    <TagCloud style={{
        fontFamily:'sans-serif', 
        fontSize:30,
        fontWeight:'bold', 
        fontStyle:'italic', color:()=>randomColor(),
        padidng:5,
        width:'100%',
        height:'100%',
    }}>
        <div style={{fontSize:50}}>Seoul</div>
        <div style={{color:'green'}}>Tag</div>
        <div rotate={90}>cloud</div>
    </TagCloud>
    )
export default Tags;

