import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import logoNegro from '../assets/logonegro1.png';
import '../home-style/home-style.css';

const ReviewsSection: React.FC = () => {
    const [formData, setFormData] = useState({
        plato: '',
        comentario: '',
        nickname: '-'
    });

    const [comments, setComments] = useState<string[]>([]);

    const fetchComments = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'comentarios'));
            const loadedComments = querySnapshot.docs.map(doc => doc.data().comentario);
            setComments(loadedComments);
        } catch (error) {
            console.error('Error al obtener los comentarios:', error);
        }
    };

    useEffect(() => {
        fetchComments();

        // 🔽 Cargar el script de Elfsight automáticamente
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newComment = {
            comentario: `${formData.plato}: ${formData.comentario} - ${formData.nickname}`,
            timestamp: Date.now()
        };

        try {
            await addDoc(collection(db, 'comentarios'), newComment);
            await fetchComments();
            setFormData({ plato: '', comentario: '', nickname: '' });
            alert('Comentario enviado correctamente.');
        } catch (error) {
            console.error('Error al enviar el comentario:', error);
            alert('Hubo un error al enviar tu comentario. Inténtalo de nuevo.');
        }
    };

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="reviews">
                    <h2>Comentarios de los usuarios</h2>
                    {comments.length === 0 ? (
                        <p className="no-comments">Aún no hay comentarios. Sé el primero en comentar.</p>
                    ) : (
                        comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p className="user-comment">{comment}</p>
                            </div>
                        ))
                    )}

                    
                </div>

                <div className="review-form">
                    <div className="image-container">
                        <img
                            src={logoNegro}
                            alt="Logo del barril"
                            className="logo-negro"
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="plato" className="plato-label">
                                ¿Qué plato probaste?
                            </label>
                            <select
                                id="plato"
                                name="plato"
                                value={formData.plato}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Selecciona un plato</option>
                                <option value="Chicharrón">Chicharrón</option>
                                <option value="Bondiola de Cerdo Ahumada">Bondiola de Cerdo Ahumada</option>
                                <option value="Costilla de Cerdo Ahumada">Costilla de Cerdo Ahumada</option>
                                <option value="Punta Gorda">Punta Gorda</option>
                                <option value="Arroz de Chicharrón">Arroz de Chicharrón</option>
                                <option value="Sopa de Paticas de Cerdo Ahumadas">Sopa de Paticas de Cerdo Ahumadas</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="comentario" className="comentario-label">
                                Agrega tu comentario:
                            </label>
                            <textarea
                                id="comentario"
                                name="comentario"
                                rows={4}
                                value={formData.comentario}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="nickname" className="nickname-label">
                                Agrega tu nombre o nickname:
                            </label>
                            <input
                                type="text"
                                id="nickname"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="button-enviar">
                            <strong>Enviar comentario</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circulo"></div>
                                <div className="circulo"></div>
                            </div>
                        </button>

                        <p className="disclaimer">
                            Estás enviando tu información a Asados al Barril, que impulsa este sitio
                            y patrocina este sorteo. Se aplican los términos y condiciones del mismo.
                        </p>
                    </form>
                </div>
            </div>
            <div className="container contenido-principal">
            {/* 🔽 Widget de Google Reviews de Elfsight */}
            <div className="elfsight-app-6f06268f-a2d4-42fc-ab92-f584b640516b" data-elfsight-app-lazy></div>
            </div>
        </section>
    );
};

export default ReviewsSection;