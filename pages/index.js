import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';

class Index extends React.Component {

    static async getInitialProps() {
        let userData = {};
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            userData = response.data
        }catch(err){
            console.error(err)
        }

        return {userData}
    }

    constructor() {
        super()
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        const {userData, initialData} = this.props

        return (
            <BaseLayout>
             <h1>{userData.title}</h1>
            </BaseLayout>
        )
    }
}

export default Index;