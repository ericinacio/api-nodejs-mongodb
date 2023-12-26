import { Service as ServiceModel } from '../models/Service.js';

export default {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };
            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado com sucesso" });
        } catch (error) {
            console.error(error);
        };
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            if (services.length === 0) {
                return res.status(404).json({ message: 'Nenhum serviço encontrado.' });
            }
            res.json(services);
        }
        catch (error) {
            res.status(404).json({ message: 'Nenhum serviço encontrado.' });
        };
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." })
                return
            }
            res.json(service);
        } catch (error) {
            res.status(404).json({ msg: "Serviço não encontrado." })
        };
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." })
                return
            }
            const deletedService = await ServiceModel.findByIdAndDelete(id)
            res.status(200).json({ deletedService, msg: 'Serviço excluído com sucesso.' })
        } catch (error) {
            res.status(404).json({ msg: "Serviço não encontrado." })
        };
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const updatedService = await ServiceModel.findByIdAndUpdate(id, service)
            if (!updatedService) {
                res.status(404).json({ msg: "Serviço não encontrado." })
                return
            }
            res.status(200).json({ service, msg: "Serviço Atualizado com sucesso." })
        } catch (error) {
            res.status(404).json({ msg: "Serviço não encontrado." })
        };
    }
};