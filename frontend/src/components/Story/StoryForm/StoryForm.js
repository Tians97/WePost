import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory, createStory, updateStory } from '../../../store/stories';
import { getCategories, fetchCategories } from '../../../store/categories';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './StoryForm.css'




export default function StoryForm({ user }) {
    const { storyId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const categories = useSelector(getCategories)
    let storyData = useSelector(getStory(storyId))


    storyData = {
        title: "",
        body: "",
        category: null,
        photo: []
    }
        
    const [story, setStory] = useState(storyData)
    const [category, setCategory] = useState("");
    const [image, setImage] = useState()
    const [file, setFile] = useState()




    useEffect(() => {
        if (storyId) {
            dispatch(fetchStory(storyId))
        }
        dispatch(fetchCategories())
    }, [storyId])


    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('story[title]', story.title);
        formData.append('story[body]', story.body);
        formData.append('story[categoryId]', category)
        formData.append('story[photo]', image)
    }

    function handleChange(e) {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
    }



    let errors = {}

    return (
        <form>
            <div className='story-form-container'>
                <div className='story-form-header'>
                    <h1>Draft in {user.username}</h1>
                </div>

                
                <div className='upload-box'>
                    <input type="file" onChange={handleChange}  />
                </div>
                <div>
                    <img className="preview-image" src={file}/>
                </div>
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
                            <TextField required inputRef={errors} helperText="Please enter your story title" label="Title" variant="standard" value={story.title} onChange={e => { setStory({ ...story, title: e.target.value }) }} />
                        </Box>
                        <br /><br />
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Category"
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    {categories.map(c =>
                                        <MenuItem key= {c.id} value={c.id}>{c.title}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <br /><br />
                    <div className='story-form-body'>
                        <TextField
                            required inputRef={errors}
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
