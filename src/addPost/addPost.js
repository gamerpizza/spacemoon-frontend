import "./addPost.css"
import * as PropTypes from "prop-types";
import {useState} from "react";
import {Host} from "../BackEnd"

export function AddPost({shown = false, userToken = "", onClose = () => {}}) {
    const [isReady, setIsReady] = useState(false);
    const [caption, setCaption] = useState("");
    function post(){
        let post = {caption: caption}
        let bearerToken = "Bearer " + userToken
        console.log(bearerToken)
        fetch(Host + "/posts", {
            method: "POST",
            headers: {"Authorization": bearerToken},
            body: JSON.stringify(post),
        }).then(r => {
        }).then(r => {
            setCaption("")
            setIsReady(false)
            onClose();
        })

    }

    function changeCaption(e){
        let newCaption = e.target.value;
        if (newCaption.trim() !== ""){
            setIsReady(true)
        } else {
            setIsReady(false)
        }
        setCaption(newCaption);
    }

    return (<>
        {shown ?
            <div className="AddPost">
                <form>
                    <fieldset>
                        <label htmlFor="post-caption">Caption </label>
                        <input type="text" id="post-caption" name="post-caption"
                               placeholder={"write a caption for your post"} value={caption} onChange={changeCaption}/>
                    </fieldset>
                    <label htmlFor="product-image" className="Button">Select file</label>
                    <input type="file" id="product-image" className={"Disappear"} name="product-image"
                           accept={"video/*,image/*"} multiple={true}/>
                    <button type={"button"} className="Button Big White" onClick={onClose} >Discard</button>
                    <button type={"button"} className="Button Big" disabled={!isReady} onClick={post}>Post</button>
                </form>
            </div>
            : <></>
        }
    </>);
}


AddPost.propTypes = {
    shown: PropTypes.bool
};
