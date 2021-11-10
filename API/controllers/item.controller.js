class ItemController {
    constructor({ ItemService }) {
        this._itemService = ItemService;
    }
    async searchItems(req, res) {
        const { q } = req.query;        
        if (q) {
            try {
                const items = await this._itemService.searchItems(q);
                res.set("Cache-Control", "public, max-age=31557600");
                return res.status(200).send( items );
            } 
            catch (error) {
                return res.send({ ok:false, error: error });
            }
        } else {
            return res.status(200).send({ ok: true, results: [] });
        }
    }
  
    async getItemById(req, res) {
        
        const { id } = req.params;
        try {
            const items = await this._itemService.getItemById(id);
            res.set("Cache-Control", "public, max-age=31557600");
            return res.status(200).send( items );
        } 
        catch (error) {
            return res.status(404).send({ error: error });
        }
    }
  }
  
  module.exports = ItemController;