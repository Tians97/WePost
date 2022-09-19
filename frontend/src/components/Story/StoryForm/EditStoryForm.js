import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './StoryForm.css'
import { useParams, useHistory } from 'react-router-dom';
import { getStory, fetchStory, updateStory } from '../../../store/stories';
import { getCategories, fetchCategories } from '../../../store/categories';

export default function EditStoryForm() {
    const dispatch = useDispatch()
    const {storyId} = useParams()
    const user = useSelector((state) => state.session.user);
    const history = useHistory()
    const categories = useSelector(getCategories)
    let storyData = useSelector(getStory(storyId))


    const categoryContent = {
        1: "Fitness",
        2: "Sport",
        3: "Health",
        4: "Food",
        5: "Car",
        6: "Gaming",
        7: "Technology",
        8: "Travel"
    }

    const [story, setStory] = useState()
    const [category, setCategory] = useState();
    const [newImage, setNewImage] = useState()
    const [newFile, setNewFile] = useState()


    useEffect(() => {
        if (storyId) {
            dispatch(fetchStory(storyId))
        }
        dispatch(fetchCategories())
    }, [storyId])

    useEffect(() => {
        if(storyData) {
            setStory(storyData);
            setCategory(storyData.categoryId);
        }
    },[storyData]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('story[title]', story.title);
        formData.append('story[body]', story.body);
        formData.append('story[categoryId]', category)
        if(newImage){
            formData.append('story[photo]', newImage)
        }
        // formData.append('story[photo]', image)
        dispatch(updateStory(formData, storyId))
        history.push(`/stories/${storyId}`)
    }

    function handleChange(e) {
        setNewImage(e.target.files[0]);
        setNewFile(URL.createObjectURL(e.target.files[0]))
    }

    if (!story) return null;

    return (
        <form>
            <div className='story-form-container'>
                <div className='story-form-header'>
                    <h1>Draft in {user.username}</h1>
                </div>


                <div className='upload-box'>
                    <input type="file" onChange={handleChange} />
                </div>
                <br />
                <div>
                    <img className="preview-image" src={newFile ? newFile : story.photoUrl}/>
                </div>
                <br/>
                <div className='story-form-input'>
                    <div className='story-form-title'>
                        {/* <input id='story-form-title' placeholder='Title' value={story.title} onChange={e => { setStory({ ...story, title: e.target.value }) }}></input> */}
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField required style={{ width: '100%' }} id="standard-basic" helperText="Please enter your story title" label="Title" variant="standard" value={story.title} onChange={e => { setStory({ ...story, title: e.target.value }) }} />
                        </Box>
                        <br /><br />
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Category"
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    {categories.map(c =>
                                        <MenuItem key={c.id} value={c.id}>{c.title}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br /><br />
                    <div className='story-form-body'>
                        <TextField required
                            placeholder="Tell your story..."
                            helperText="Please enter your story title"
                            value={story.body}
                            onChange={e => { setStory({ ...story, body: e.target.value }) }}
                            multiline
                            rows={13}
                            fullWidth
                        />
                    </div>
                    <br />
                    <a onClick={handleSubmit} className='story-form-publish-button'>Publish</a>
                </div>
            </div>
        </form>
        
    )
}
