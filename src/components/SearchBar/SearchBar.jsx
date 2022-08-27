import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    return (
        <React.Fragment>
            <Paper component="form" onSubmit={() => {}} sx={{ border: "1px solid #e3e3e3", borderRadius: 20, pl: 2, boxShadow: "none", mr: { sm: 5 } }} >
                <input className="search-bar" placeholder="Search..." value="" onChange={() => {}} />
                <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                    <Search />
                </IconButton>
            </Paper>
        </React.Fragment>
    )
}

export default SearchBar