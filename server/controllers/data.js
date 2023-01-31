import Data from "../models/data.js";

//Get All Data
export const getData = async (req, res) => {
  try {
    const datas = await Data.find();
    res.status(200).json(datas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Blog by ID
export const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Post New Data
export const createData = async (req, res) => {
  const NewData = new Data(req.body);
  try {
    await NewData.save();
    res.status(201).json(NewData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete Data
export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = Data.findByIdAndDelete(id);
    res.json(deletedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update Data
export const updateData = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedData = await Data.findByIdAndUpdate(id, req.body);
    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
