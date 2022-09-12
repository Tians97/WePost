import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory, createStory, updateStory } from '../../../store/stories';
import './StoryForm.css'


export default function StoryForm({user}) {
    const {storyId} = useParams()
    const dispatch = useDispatch()
    let storyData = useSelector(getStory(storyId))

    const type = storyId ? "Update Story" : "Create Story"

    if (type == "Create Story") {
        storyData = {
            title: "",
            body: ""
        }
    }

    const [story, setStory] = useState(storyData)

    // useEffect(() => {
    //     if (storyId) {
    //         dispatch(fetchStory(storyId))
    //     }
    // }, [storyId])


    function handleSubmit(e) {
        if (type === "Update Story") {
            dispatch(updateStory(story))
        } else {
            dispatch(createStory(story))
        }
    }


    return (
        <div className='story-form-container'>
            <div className='story-form-header'>
                <div className='story-form-header-left'>
                    <img src='https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png' />
                    <p>Draft in {user.username}</p>
                </div>
                <div className='story-form-header-right'>
                    <p className='story-form-publish-button'>Publish</p>
                </div>
            </div>
            <div className='story-form-input'>
                <div className='story-form-title'>
                    <input id='story-form-title' placeholder='Title' value={story.title} onChange={e => { setStory({ ...story, title: e.target.value }) }}></input>
                </div>
                <div className='story-form-body'>
                    <textarea placeholder = "Tell your story..."value={story.body} onChange={e => { setStory({ ...story, body: e.target.value }) }}></textarea>
                </div>
            </div>
        </div>
    )
}
