const tokenModel = require(`../models/tokenModel`);

module.exports = {

   async getTokenByID(user_id) {
      try {
         return await tokenModel.getTokenByID(user_id);
      } catch (error) {
         console.log(error);
         res.send(`Error get token`);
      }
   }
   ,
   async getToken(refreshToken) {
      try {
         return await tokenModel.getToken(refreshToken);
      } catch (error) {
         console.log(error);
         res.send(`Error get token`);
      }
   }

   ,
   async refreshToken(user_id, refreshToken) {
      try {
         return await tokenModel.refreshToken(user_id, refreshToken);
      } catch (error) {
         console.log(error);
         res.send(`Error refresh token`);
      }
   }

   ,
   async save(user_id, refreshToken) {
      try {
         return await tokenModel.save(user_id, refreshToken);
      } catch (error) {
         console.log(error);
         res.send(`Error save token`);
      }
   }
   ,
   async delete(refreshToken) {
      try {
         return await tokenModel.delete(refreshToken);
      } catch (error) {
         console.log(error);
         res.send(`Error delete token`);
      }
   }

   ,
   async getTokenAllInfo(refreshToken) {
      try {
         return await tokenModel.getTokenAllInfo(refreshToken);
      } catch (error) {
         console.log(error);
         res.send(`Error get info token`);
      }
   }
}