import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory, createStory, updateStory} from '../../../store/stories';
import { getCategories, fetchCategories } from '../../../store/categories';
import ImageUpload from './ImageUpload';

import './StoryForm.css'


export default function StoryForm({user}) {
    const {storyId} = useParams()
    const dispatch = useDispatch()
    const categories = useSelector(getCategories)
    let storyData = useSelector(getStory(storyId))

    const type = storyId ? "Update Story" : "Create Story"

    if (type == "Create Story") {
        storyData = {
            title: "",
            body: ""
        }
    }

    const [story, setStory] = useState(storyData)
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (storyId) {
            dispatch(fetchStory(storyId))
        }
    }, [storyId])


    function handleSubmit(e) {
        if (type === "Update Story") {
            dispatch(updateStory(story))
        } else {
            dispatch(createStory(story))
        }
    }


    return (
        <form>
            <div className='story-form-container'>
                <div className='story-form-header'>
                    <h1>Draft in {user.username}</h1>
                </div>
                <a onClick={handleSubmit} className='story-form-publish-button'>Publish</a>
                <div className='upload-box'>
                    <ImageUpload />
                </div>
                <div className='story-form-input'>
                    <div className='story-form-title'>
                        <input id='story-form-title' placeholder='Title' value={story.title} onChange={e => { setStory({ ...story, title: e.target.value }) }}></input>
                        <select
                            name='phoneType'
                            onChange={e => setCategory(e.target.value)}
                            value={category}
                        >
                            <option value='' disabled>Select a category type...</option>
                            {categories.map(category =>
                                <option key={category}>{category}</option>
                            )}
                        </select>
                    </div>
                    <div className='story-form-body'>
                        <textarea placeholder="Tell your story..." value={story.body} onChange={e => { setStory({ ...story, body: e.target.value }) }}></textarea>
                    </div>
                </div>
            </div>
        </form>
    )
}
