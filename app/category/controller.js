const Category = require('./model')
module.exports={
    index: async(req, res)=>{
        try{
            const alertMessage = req.flash("alertMessage")
            const alertStatus = req.flash("alertStatus")
      
            const alert = { message: alertMessage, status: alertStatus}
            const category = await Category.find()

            console.log("alert >>")
            console.log(alert)

            res.render("admin/category/view_category", {
                category, 
                alert,
                name: req.session.user.name,
                title: 'Halaman kategory'
            })
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')

        }
    },
    viewCreate: async(req,res)=>{
        try{
            res.render('admin/category/create'),{
                name: req.session.user.name,
                title: 'Halaman tambah kategori'
            }
        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    actionCreate : async(req,res)=>{
        try{
            const { name } = req.body

            let category = await Category({ name })
            await category.save();

            req.flash('alertMessage', "Success Add Data")
            req.flash('alertStatus', "success")

            res.redirect('/category')

        }catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    }, 

    viewEdit : async(req,res)=>{
        try {
            const { id } = req.params
      
            const category = await Category.findOne({_id : id})//nampilin data single 

            res.render('admin/category/edit', {
                category,
                // name: req.session.user.name,
                title: 'Page Edit Category'
            })
            
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    actionEdit : async(req, res)=>{
        try {
            const{ id } = req.params;
            const{ name } = req.body

            await Category.findOneAndUpdate({
                _id: id
            }, { name });

            req.flash('alertMessage', "Success Edit Category")
            req.flash('alertStatus', "success")

            res.redirect('/category')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
            
        }
    },
    actionDelete:async(req,res)=>{
        try {
            const{ id } = req.params; 
            await Category.findOneAndRemove({
                _id: id
              });

            req.flash('alertMessage', "Success Delete Category")
            req.flash('alertStatus', "success")

            res.redirect('/category')
            
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
            
        }
    }

}