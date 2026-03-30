const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

//postMenu to add new item
const postMenu = async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();

    console.log('menu data saved');
    res.status(200).json(response); 
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
//getMenu
const getMenu = async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('menu data fetched');
    res.status(200).json(data);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
//getMenu Parameterised on basis of taste
const getMenuOfTaste = async(req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == 'spicy' || taste == 'sweet' || taste == 'sour') {
      const menuItem = await MenuItem.find({ taste: taste });

      console.log(menuItem);
      res.status(200).json(menuItem);
    }
    else {
      res.status(404).json('taste not found.');
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ Error: 'Internal Server Error.' });
  }
}
router.post('/', postMenu);
router.get('/', getMenu);
router.get('/:taste', getMenuOfTaste);

module.exports = router;