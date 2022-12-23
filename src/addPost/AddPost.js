import "./AddPost.css"
import * as PropTypes from "prop-types";
import {useState} from "react";
import {Host} from "../BackEnd";

export function AddPost({
                            shown = false, userToken = "", onClose = () => {
    }
                        }) {
    const [isReady, setIsReady] = useState(false);
    const [caption, setCaption] = useState("");
    const [files, setFiles] = useState([])

    function post(e) {
        e.preventDefault()
        console.dir(e.target)
        const data = new FormData(e.target);
        console.log(data)
        let bearerToken = "Bearer " + userToken
        console.log(bearerToken)
        fetch(Host + "/posts", {
            method: "POST",
            headers: {"Authorization": bearerToken},
            body: data,
        }).then(r => {
            return r.text();
        }).then(r => {
            setCaption("")
            setIsReady(false)
            onClose();
        })
        return false
    }

    function changeCaption(e) {
        let newCaption = e.target.value;
        if (newCaption.trim() !== "") {
            setIsReady(true)
        } else {
            setIsReady(false)
        }
        setCaption(newCaption);
    }

    function updateFiles(e) {
        let fileList = e.target.files;
        setFiles(fileList)
    }

    return (<>
        {shown ?
            <div className="AddPost">
                <form onSubmit={post}>
                    <fieldset>
                        <label htmlFor="post-caption">Caption </label>
                        <input type="text" id="post-caption" name="caption"
                               placeholder={"write a caption for your post"} value={caption} onChange={changeCaption}/>
                    </fieldset>
                    <button type={"button"} className="Button Big White" onClick={onClose}>Discard</button>
                    <button type={"submit"} className="Button Big" disabled={!isReady}>Post</button>
                </form>
            </div>
            : <></>
        }
    </>);
}


AddPost.propTypes = {
    shown: PropTypes.bool
};


function FileLoader({onChange, files}) {

    let fileList = []
    for (let i = 0; i < files.length; i++) {
        fileList.push(<li key={files[i].name}>{files[i].name}</li>)
    }
    return (<>
        <label htmlFor="product-image" className="Button">Select files</label>
        <input type="file" id="product-image" className={"Disappear"} name="media"
               accept={"image/*"} multiple={false} onChange={onChange}/>
        {files.length > 0
            ? <ul className={"PostFilesList"}>{fileList}</ul>
            : <></>}
    </>);
}

FileLoader.propTypes = {onChange: PropTypes.func};