import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Meme} from "./Meme";

function DisplayTemplates() {

    const [templates, setTemplates] = useState({});
    const [template, setTemplate] = useState(null);

    // console.log("CHOSEN TEMPLATE", templates);

    function axiosConfig(query) {
					return {
						url: "http://memefly.herokuapp.com/api/memes/base",
						method: "POST",
						data: {
							query
						}
					};
				}

  function getBaseMeme(id, rand = false) {
			return `
        query{
            getBaseMeme(id:${id}, rand:${rand}){
                message
                fetched
                meme_bounding_box
                meme_id
                meme_url
                meme_text
            }
        }
    `;
		}

  useEffect(() => {
    Axios(axiosConfig(getBaseMeme(null, true)))
    .then(res => {
      // console.log(res);
      setTemplates(res.data.data.getBaseMeme);
    })

  }, [])


  return (
      <div style={{ textAlign: "center" }}>
        {(
          <>
            {/* {templates.map(template => {
              return (
                <Meme
                  template={template}
                  onClick={() => {
                    setTemplate(template);
                  }}
                />
              );
            })} */}
          </>
        )}
      </div>
  );
};

export default DisplayTemplates;