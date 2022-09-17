import { useDispatch, useSelector } from "react-redux";
import { fetchQueryStories, getStories } from "../../store/stories";
import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import StoryIndexItem from "../Story/StoryIndex/StoryIndexItem";


export function SearchIndex() {
    const { query } = useParams();
    const dispatch = useDispatch();
    const storyData = useSelector(getStories);
    console.log(storyData)
    console.log(query)
    

    const filterd =  storyData.filter(story=> story.title.toLowerCase().includes(query))
    console.log(filterd)
    

    useEffect(() => {
        dispatch(fetchQueryStories(query))
    }, [query])




    if (!storyData) { return null }

    return (
        <>
            <h1>Search Results:</h1>
            
            <div className='index-item'>
                {filterd.map(story => {
                    return <StoryIndexItem key={story.id} story={story} />
                })}
            </div>
        </>
        )

}