import { TextField } from '@mui/material'

const Search = props => {
   const { onChange, value } = props

   return (
      <TextField
         label='search'
         variant='standard'
         fullWidth
         sx={{ m: '20px' }}
         type='search'
         value={value}
         onChange={onChange}
      />
   )
}

export default Search
