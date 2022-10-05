import { useDispatch, useSelector } from "react-redux";
import { fetchQueryStories, getStories } from "../../store/stories";
import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import StoryIndexItem from "../Story/StoryIndex/StoryIndexItem";
import "./SearchBar.css"


export function SearchIndex() {
    const { query } = useParams();
    const dispatch = useDispatch();
    const storyData = useSelector(getStories);

    

    const filterd =  storyData.filter(story=> story.title.toLowerCase().includes(query))

    

    useEffect(() => {
        dispatch(fetchQueryStories(query))
    }, [query])




    if (!storyData) { return null }

    return (
        <>
            <div className="search-result-container">
                <h1 className="search-header">Search Results:</h1>
            </div>
            <div className='index-item'>
                {filterd.map(story => {
                    return <StoryIndexItem key={story.id} story={story} />
                })}
            </div>
        </>
        
        )

}