import React from 'react';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '@/services/contact';
import { toast } from "sonner";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        await sendContactForm(data);
        toast.success("Tu solicitud a sido enviada correctamente");
        reset();
    };

    return (
        <section className="py-16 bg-[var(--negro)]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--blanco)] mb-12">
                    Ponte en <span className="text-[var(--verde)]">Contacto</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Imagen */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/img/hannahproduce-sinfondo.png"
                            alt="Hannah Produce"
                            className="max-w-full h-auto max-h-96 object-contain"
                        />
                    </div>

                    {/* Formulario */}
                    <div className="bg-[#0a0a0a] p-8 rounded-lg shadow-lg border border-[var(--gris)]">
                        <h3 className="text-2xl font-semibold text-[var(--verde-limon)] mb-6">Solicita información</h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="nombre" className="block text-[var(--blanco)] mb-2">Nombre completo</label>
                                <input
                                    id="nombre"
                                    type="text"
                                    className={`w-full px-4 py-2 bg-[#1a1a1a] border ${errors.nombre ? 'border-red-500' : 'border-[var(--gris)]'} rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]`}
                                    placeholder="Tu nombre"
                                    {...register('nombre', {
                                        required: 'El nombre es requerido',
                                        minLength: {
                                            value: 3,
                                            message: 'El nombre debe tener al menos 3 caracteres'
                                        }
                                    })}
                                />
                                {errors.nombre && <p className="mt-1 text-red-500 text-sm">{errors.nombre.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-[var(--blanco)] mb-2">Correo electrónico</label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`w-full px-4 py-2 bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-[var(--gris)]'} rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]`}
                                    placeholder="tu@email.com"
                                    {...register('email', {
                                        required: 'El correo es requerido',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Dirección de correo inválida'
                                        }
                                    })}
                                />
                                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="telefono" className="block text-[var(--blanco)] mb-2">Teléfono</label>
                                <input
                                    id="telefono"
                                    type="tel"
                                    className={`w-full px-4 py-2 bg-[#1a1a1a] border ${errors.telefono ? 'border-red-500' : 'border-[var(--gris)]'} rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]`}
                                    placeholder="Tu número de teléfono"
                                    {...register('telefono', {
                                        required: 'El teléfono es requerido',
                                        pattern: {
                                            value: /^[0-9]{9}$/,
                                            message: 'Ingresa un número de 9 dígitos'
                                        }
                                    })}
                                />
                                {errors.telefono && <p className="mt-1 text-red-500 text-sm">{errors.telefono.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="empresa" className="block text-[var(--blanco)] mb-2">Empresa (opcional)</label>
                                <input
                                    id="empresa"
                                    type="text"
                                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[var(--gris)] rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]"
                                    placeholder="Nombre de tu empresa"
                                    {...register('empresa')}
                                />
                            </div>

                            <div>
                                <label htmlFor="servicio" className="block text-[var(--blanco)] mb-2">Servicio de interés</label>
                                <select
                                    id="servicio"
                                    className={`w-full px-4 py-2 bg-[#1a1a1a] border ${errors.servicio ? 'border-red-500' : 'border-[var(--gris)]'} rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]`}
                                    {...register('servicio', { required: 'Selecciona un servicio' })}
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="automatizacion">Automatización</option>
                                    <option value="audiovisual">Producción Audiovisual</option>
                                    <option value="desarrollo">Desarrollo de Software</option>
                                    <option value="consultoria">Consultoría Técnica</option>
                                    <option value="otro">Otro</option>
                                </select>
                                {errors.servicio && <p className="mt-1 text-red-500 text-sm">{errors.servicio.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="mensaje" className="block text-[var(--blanco)] mb-2">Mensaje</label>
                                <textarea
                                    id="mensaje"
                                    rows="4"
                                    className={`w-full px-4 py-2 bg-[#1a1a1a] border ${errors.mensaje ? 'border-red-500' : 'border-[var(--gris)]'} rounded-md text-[var(--blanco)] focus:outline-none focus:border-[var(--verde)]`}
                                    placeholder="Cuéntanos sobre tu proyecto o necesidad"
                                    {...register('mensaje', {
                                        required: 'El mensaje es requerido',
                                        minLength: {
                                            value: 10,
                                            message: 'El mensaje debe tener al menos 10 caracteres'
                                        }
                                    })}
                                ></textarea>
                                {errors.mensaje && <p className="mt-1 text-red-500 text-sm">{errors.mensaje.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-[var(--verde)] text-[var(--negro)] font-medium rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
