import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import s from './Subpage.module.scss';

export const Subpage = (props) =>  {

  const [pageId, setPageId] = useState([]);
  const [pageData, setPageData] = useState({});

  const [loaded, setLoaded] = useState(false);

  const [searchField, setSearchField] = useState('');

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ monsters: users }));
  // }

  // useEffect(() => {
  //   props && setPageId(props.slug)
  // }, [])

  useEffect(() => {
    props && 

    axios.get('https://backend.peredvizh.org/pages/' + props.slug)
    .then((response) => {
      setPageData(response.data);
      setLoaded(true)
    })
    .catch((reason) => {
      if (!reason.response || !reason.response.status === 400) {
        // Handle 400
      } else {
        // Handle else
      }
      setLoaded(true)
    })
  }, []);

  // useEffect(() => {
  //   fetch(`https://graphql.contentful.com/content/v1/spaces/rywkwx6777os/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer Elwb5oH4ZRZ4jAEM5F9lhTgRD3ZCGg0lbc6Si2FU00k",
  //       },
  //       body: JSON.stringify(
  //         { 
  //           query: getPersonsQuery 
  //         }),
  //     })
  //     .then((response) => response.json())
  //     .then(({ data, errors }) => {
  //       if (errors) {
  //         console.error(errors);
  //       }
  //       data && data.personCollection && setPersons(data.personCollection.items);
  //     });
  // }, []);


  // const onSearchChange = event => {
  //   //this.setState({ searchField: event.target.value });
  //   setSearchField(event.target.value);
  // };

  //   const filteredPersons = persons.filter(p =>
  //     p.name.toLowerCase().includes(searchField.toLowerCase())
  //   );

    return (
      <React.Fragment>
        {
          pageData && pageData.content &&
          <div className={`${s.pageContent}`}>
            <h2 className={s.pageTitle}>{pageData.title}</h2>
            <ReactMarkdown>{pageData.content}</ReactMarkdown>
          </div>
        }
      </React.Fragment>
    );
  }