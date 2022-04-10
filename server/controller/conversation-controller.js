import Conversation from '../modal/Conversation.js'


export const newConversation = async (req, res) => {

  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;

  try {
    const conversationExist = await Conversation.find({ members: { $all: [senderId, receiverId] } })

    if (conversationExist) {
      res.status(200).json('conversation already exist')
      return;
    }

    const newConvo = new Conversation({
      members: [senderId, receiverId]
    })
    await newConvo.save()
    res.status(200).json('new conversation added successfully')

  } catch (error) {
    res.status(500).json(error)
  }
}