import { Avatar, Snackbar } from '@mui/material'
import { Datepicker, FileInput } from 'flowbite-react'
import React, {useState} from 'react'

import {Card, Box, Typography, Divider, Stack, Textarea, FormHelperText, Button, } from '@mui/joy';
import EditorToolbar from './components/EditorToolbar';

import { convertToBase64, resizeAndConvertToBase64 } from './utils.js'

import { createHack } from '../../api/hack.js';


function Createthon() {

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
      };
    const handleClose = (newState) => () => {
        setState({ ...newState, open: false });
      };
    
    const [img, setImg] = useState(null)

    const [input, setInput] = useState({})

    console.log(input);
    
    const handleInputChange = async (e) => {
        const imageFile = e.target.files[0];
        const [max_height, max_width] = [ 50, 50 ]
        
        const base64 = await convertToBase64(imageFile);
    
        const resizedBase64 = await resizeAndConvertToBase64(imageFile, max_height, max_width); // Resize to desired dimensions
    
        // setImg(resizedBase64);
        setImg(base64);
        setInput(prev => (
            {
                ...prev,
                logo: img
            }
        ))
        // changeData('photo', 'value', base64)

    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);

        if (e.target.name === 'desc' && (275-parseInt(e.target.value.length)) < 0 ) {
            return
        }


        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      };

      const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

    const handleSubmit = async () => {
        const status = await createHack({
            name : input.name,
            desc: input.desc,
            price: input.price,
            banner: input.banner,
            logo: input.logo,
            fee: input.fee,
            topics: input.topics
        })

        console.log(status);

        // handleClick({ vertical: 'bottom', horizontal: 'left' })

        alert("Uploded")

        
    }

    return (
        <div className=' bg-[#232323] max-h-full min-h-screen pb-24 flex flex-col justify-center items-center gap-8'>
            <div className='flex items-center flex-col  '>
                <div className=' p-4 text-white text-[50px] font-bold'>Create HackaThons</div>
                <div className='max-w-[800px] text-center p-4 text-white/60  text-2xl '>Fill the details to create hackathon on <b>weThon.</b></div>
            </div>

            <div className='w-full flex justify-center'>
                <div className=' w-3/6 flex flex-col gap-8'>
                    <div className='text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-8 pb-4 justify-between'>
                            <div
                            style={{
                                position: 'relative',
                                // backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')"
                            }}
                                // className='h-28 w-28 bg-white bg-center bg-cover rounded-full'
                            >
                                <Avatar src={img? img :"url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')" }
                                sx={{ width: '8rem', height: '8rem' }} />
                                <input
                                    style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0,
                                    cursor: 'pointer',
                                    }}
                                    onChange={handleInputChange}
                                    type="file"
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    Profile<FileInput className='border-none' />
                                </div>
                                <div>
                                    Banner<FileInput className='border-none' />
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className='text-white text-lg'>Hackathon Name</div>
                            <input name="name" value={input.name} onChange={handleChange} className='w-full p-2 bg-[#302f2f] rounded-lg' type="text" />
                        </div>
                        {/* <div>
                            <div className='text-white text-lg pt-4'>Hackathon Description</div>
                            <textarea className='w-full p-2 h-28 bg-[#302f2f] rounded-lg' type="text" />
                        </div> */}

                        <br />
                        
                        <p>Bio</p>

                        <Card>
                        <Box sx={{ mb: 1 }}>
                            {/* <Typography level="title-md">Bio</Typography> */}
                            <Typography level="body-sm">
                            Write a short introduction to be displayed on your profile
                            </Typography>
                        </Box>
                        <Divider />
                        <Stack spacing={2} sx={{ my: 1 }}>
                            <EditorToolbar />
                            <Textarea
                            size="sm"
                            minRows={4}

                            name="desc"
                            value={input.desc}
                            onChange={handleChange}
                       
                            sx={{ mt: 1.5 }}
                            defaultValue="This Is My Text"
                            />
                            <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                            {parseInt(input?.desc?.length)?
                                `${275-parseInt(input.desc.length)} characters left`:
                                ''
                            }
                            </FormHelperText>
                        </Stack>
                        {/* <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid">
                                Save
                            </Button>
                            </CardActions>
                        </CardOverflow> */}
                        </Card>



                        <div className='flex items-center justify-between '>
                            <div>
                                <div className='textx-white text-lg pt-4'>Start Date</div>
                                <Datepicker id='start' name="startdate" onChange={handleChange} />
                            </div>
                            <div className='w-1/2 flex flex-col justify-end items-end'>
                                <div className='text-white text-lg pt-4'>End Date</div>
                                <Datepicker id='end' />
                            </div>
                        </div>
                        <div className='flex justify-between '>
                            <div className='w-1/2'>
                                <div className='text-white text-lg pt-4'>Prizepool  ( In INR )</div>
                                <input name="price" value={input.price} onChange={handleChange} className=' p-2 bg-[#302f2f] rounded-lg w-2/3' placeholder='99999' type="number" />
                            </div>
                            <div className='w-1/2 flex flex-col justify-end items-end'>
                                <div className='text-white text-lg pt-4 '>Registration Fee  ( In INR )</div>
                                <input
                                name="fee" value={input.fee} onChange={handleChange}
                                className='w-2/3 p-2 bg-[#302f2f] rounded-lg' placeholder='99999' type="number" />
                            </div>

                        </div>
                        <div>
                            <div className='text-white text-lg pt-4'>Topics</div>
                            <input name="topics" value={input.topics} onChange={handleChange} className='w-full p-2 bg-[#302f2f] rounded-lg' type="text" />
                        </div>
                        <div className='text-white text-lg pt-4'>Rules</div>
                        <textarea name="rules" value={input.rules} onChange={handleChange} className='w-full p-2 h-28 bg-[#302f2f] rounded-lg' type="text" />
                    </div>
                </div>
            </div>

            <Button onClick={handleSubmit}>
                Submit
            </Button>

            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
            />

        </div>
    )
}

export default Createthon