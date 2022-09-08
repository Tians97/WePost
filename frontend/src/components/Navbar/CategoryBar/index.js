import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, getCategories } from '../../../store/categories';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./CategoryBar.css"


export default function CategoryBar() {

    const dispatch = useDispatch()
    const categories = useSelector(getCategories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='category-bar'>
            <Box sx={{ maxWidth: { xs: 200, sm: 700 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab className='tab' label="All" variant = "scrollable"></Tab>
                    {categories.map(category => {
                        return <Tab className='tab' label={category.title} variant = "scrollable"></Tab>
                })}
                </Tabs>
            </Box>
            {/* <ul>
                
            </ul> */}
        </div>
    )
}
