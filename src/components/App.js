import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';
import '../style/App.css'

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=27057638-84768c1340507073def339350&q=${entry}&image_type=photo`);
        this.setState({ images:response.data.hits })
    }

    render() {
        return(
            <div className='container'>
                <div className='boxSearchInput'>
                    <SearchInput onSearchSubmit = {this.onSearchSubmit} />
                </div>
                <div className='boxImageList'>
                    <ImageList images={this.state.images} />
                </div>
            </div>
        )
    }
}

export default App;