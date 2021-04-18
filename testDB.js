
(async function()
{
    try
    {
        await sequelize.authenticate();
        console.log('connection has been estableished successfully');
    
          await sequelize.sync();  
    }
    catch (error)
    {
        console.error('Unable to connect to the database ', error);
    }
})().catch(console.error);