import "./addPost.css"
import * as PropTypes from "prop-types";

export function AddPost({
                            shown = false, onClose = () => {
    }
                        }) {
    return (<>
        {shown ?
            <div className="AddPost">
                <form>
                    <fieldset>
                        <label htmlFor="post-caption">Caption </label>
                        <input type="text" id="post-caption" placeholder={"write a caption for your post"} name="post-caption"/>
                    </fieldset>
                    <label htmlFor="product-image" className="Button">Select file</label><input type="file"
                                                                                                id="product-image"
                                                                                                className={"Disappear"}
                                                                                                name="product-image"/>

                    <button className="Button Big White" onClick={onClose} type={"button"}>Discard</button>
                    <button className="Button Big" disabled={true}>Post</button>
                </form>
            </div>
            : <></>
        }
    </>);
}


AddPost.propTypes = {
    shown: PropTypes.bool
};
