const { response } = require('express')
const req = require('express/lib/request');
const res = require('express/lib/response');
const Phone = require('../model/Phone');

const savePhone = (req, res) => {
  
    const { phoneCode, phoneModel, phoneDescription, phonePrice } = req.body;

    // Check if a phone with the same phoneCode already exists
    Phone.findOne({ phoneCode: phoneCode })
        .then(existingPhone => {
            if (existingPhone) {
                // If phone with the same phoneCode exists, return an alert
                res.status(400).json({ error: 'Phone with the same phoneCode already exists' });
            } else {
                // If phone with the same phoneCode doesn't exist, create and save the new phone
                const newPhone = new Phone({
                    phoneCode: phoneCode,
                    phoneModel: phoneModel,
                    phoneDescription: phoneDescription,
                    phonePrice: phonePrice
                });

                newPhone.save()
                    .then(savedPhone => {
                        console.log('Phone added successfully:', savedPhone);
                        res.status(201).json({ message: 'Phone added successfully', phone: savedPhone });
                    })
                    .catch(error => {
                        console.error('Error saving phone:', error);
                        res.status(500).json({ error: 'Failed to save phone' });
                    });
            }
        })
        .catch(error => {
            console.error('Error checking phone existence:', error);
            res.status(500).json({ error: 'Failed to check phone existence' });
        });

}

// const getItem = (req, res) => {
//    Item.find({})
//    .then(items => res.json(items))
//    .catch(err => res.json(err))
// }

// const getSelectItem = (req,res) =>{
//     const id = req.params.id;
//     Item.findById({_id:id})
//     .then(items => res.json(items))
//     .catch(err => res.json(err))
// }

// const updateItem = (req,res) =>{
//     const id = req.params.id;
//     Item.findByIdAndUpdate({_id: id}, {
//     itemCode:req.body.itemCode, 
//     itemName:req.body.itemName, 
//     itemPrice:req.body.itemPrice, 
//     qtyOnHand:req.body.qtyOnHand})

//     .then(items => res.json(items))
//     .catch(err => res.json(err))
// }


// const deleteItem = (req,res) => { 
//     const id = req.params.id;
//     Item.findByIdAndDelete({_id:id})
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// }
// const updateItem = () => { }

module.exports = {
    savePhone
    // ,getItem,getSelectItem,updateItem,deleteItem
}