import { useEffect } from 'react';
import { Link, useParams, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory } from '../../../store/stories';
import dateFormat from "dateformat";

export default function StoryShow() {

    return (
        <div>StoryShow</div>
    )
}
