
export const createBlog =async (req, res) => {
    try{
        return  res.status(201).json({ message: 'Blog created successfully' });
    }catch(err){
        res.status(404).json({err:"create Not Found"})
     
    }
  };
  
  export const readBlog =async (req, res) => {
    try{
 return res.status(200).json({ message: 'Blog read successfully' });
    }catch(err){
        res.status(404).json({err:"Blog read Not Found"})
        
    }
  };
  
  export const updateBlog = async(req, res) => {
    try{
     return res.status(200).json({ message: 'Blog updated successfully' });
    }catch(err){
        res.status(404).json({err:"Blog update Not Found"})
       
    }
  };
  
  export const deleteBlog =async (req, res) => {
    try{
    return  res.status(200).json({ message: 'Blog deleted successfully' });
    }catch(err){
        res.status(404).json({err:"Blog deleted Not Found"})
    }
  }