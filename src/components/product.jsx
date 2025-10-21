import { useState } from 'react'
import img1 from '../assets/8310a514814de748a437eb5e05d19b96a8be9a23.jpg'
import img2 from '../assets/bc7510e2554c6956af11d9434b2a0195fad28ec6.jpg'
import img3 from '../assets/ce124a3f20043a6663f8dcd17803a008174c7e48.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
export default function Product() {
  const [users, setUsers] = useState([
    {
      id:1,
      avatar: img1,
      name:"Предложение для оптовиков, СП и дистрибьюторов"
    },
    {
      id:2,
      avatar: img2,
      name:"Предложение для родительских комитетов"
    },
    {
      id:3,
      avatar: img3,
      name:"Большая семья"
    },
    {
      id:4,
      avatar: img1,
      name:"Предложение для оптовиков, СП и дистрибьюторов"
    }
  ])
  const [open, setOpen] = useState(false);
  const [newImage, setNewImage] = useState('');
  const [newName, setNewName] = useState('');
 
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');

  const [idx, setIdx] = useState(null);

  const [infoOpen, setInfoOpen] = useState(false);
  const [infoUser, setInfoUser] = useState(null);

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function addUser() {
    const newUser = {
      id: Date.now(),
      avatar: newImage,
      name: newName
    };
  setUsers([...users, newUser]);
  setNewImage('');
  setNewName('');
  setOpen(false);
  }
  function editUser() {
    setUsers(users.map(u =>
      u.id === idx ? { ...u, name: editName, avatar: editImage } : u
  ));
   setEditOpen(false);
  }

  return(
    <>
      <section className='max-w-[1400px] m-auto flex flex-col items-center'>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Card</Button>
      <div className='flex flex-wrap items-center justify-center gap-[20px]'>
        {users.map((user) => (
          <div key={user.id} className='flex flex-col items-start gap-[20px] p-[10px] w-70 bg-[white] shadow-lg rounded-[10px]'>
            <img className='w-70' src={user.avatar} alt="" />
            <h1 className='font-medium'>{user.name}</h1>
            <div className='flex items-center gap-[10px]'>
              <Button onClick={() => deleteUser(user.id)} variant="contained">Delete</Button>
              <Button onClick={() => {
                setEditOpen(true);
                setEditName(user.name);
                setEditImage(user.avatar);
                setIdx(user.id);
                }}
                variant="outlined">Edit</Button>

                <Button
                  variant="contained"
                  onClick={() => {
                    setInfoUser(user); 
                    setInfoOpen(true);
                  }}
                >
                  Info
                </Button>
            </div>
          </div>
        ))}
      </div>
      </section>

      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Card"}
        </DialogTitle>
        <DialogContent className='flex flex-col items-center gap-[30px]'>
          <TextField className='w-90' id="outlined-basic" label="Image" variant="outlined" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
          <TextField className='w-90' id="outlined-basic" label="Name" variant="outlined"  value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={addUser}>Add</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Card"}
        </DialogTitle>
        <DialogContent className='flex flex-col items-center gap-[30px]'>
          <TextField className='w-90' id="outlined-basic" label="Image" variant="outlined" value={editImage} onChange={(e) => setEditImage(e.target.value)} />
          <TextField className='w-90' id="outlined-basic" label="Name" variant="outlined"  value={editName} onChange={(e) => setEditName(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Close</Button>
          <Button onClick={editUser} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>

      <Dialog 
      open={infoOpen}>
        <DialogTitle>Card Info</DialogTitle>
        <DialogContent className='flex flex-col items-center gap-[10px]'>
          {infoUser && (
            <>
              <img src={infoUser.avatar} alt={infoUser.name} className='w-70 rounded-[10px]' />
              <h2 className='font-medium'>{infoUser.name}</h2>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInfoOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
