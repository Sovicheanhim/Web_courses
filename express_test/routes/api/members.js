const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../Members')
//  Gets All Members
router.get("/", (req, res) => res.json(members))

// Gets single member
router.get("/:id", (req, res) =>{
    // res.send(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found)
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    else
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
})


// Create Member
router.post("/", (req, res) =>{
    const newMembers = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if(!newMembers.name || !newMembers.email){
        return res.status(400).json({ msg : "Please include name and email"})
    }

    members.push(newMembers)
    // res.json(members)
    res.redirect("/")
})


// Update Members
router.put("/:id", (req, res) =>{
    // res.send(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found){
        const updateMember = req.body
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email

                res.json({msg : 'Member updated', member})
            }
        })
    }
    else
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
})


// Delete Member
router.delete("/:id", (req, res) =>{
    // res.send(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id))
    
    if(found)
        res.json({
            msg : "Member deleted", 
            members :
            members.filter(member => member.id !== parseInt(req.params.id))})
    else
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
})

module.exports = router