import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import "../components/textarea.css";

const FormPost = () => {

  const navigate = useNavigate();
  const parametros = useParams();

  const [title, setTitle] = useState("");
  const [metadescription, setMetadescription] = useState("");
  const [body, setBody] = useState("");
  const [categoria, setCategoria] = useState("");
  useEffect(() => {
    if (parametros.id) {
      api
        .get(`posts/${parametros.id}/`)
        .then((resposta) => setTitle(resposta.data.title));
      api
        .get(`posts/${parametros.id}/`)
        .then((resposta) => setMetadescription(resposta.data.metadescription));
      api
        .get(`posts/${parametros.id}/`)
        .then((resposta) => setBody(resposta.data.body));
      api
        .get(`posts/${parametros.id}/`)
        .then((resposta) => setCategoria(resposta.data.categoria));
    }
  }, [parametros]);

  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    api.get("categorias/").then((resposta) => setCategorias(resposta.data));
  }, []);

  const CadPost = (evento) => {
    evento.preventDefault();

    if (parametros.id) {
      api
        .put(`/posts/${parametros.id}`, {
          title: title,
          metadescription: metadescription,
          body: body,
          categoria: categoria
        })
        .then(() => {
          alert("Sucesso na atualização!");
          navigate("/admin/posts");
        });
    } else {
      api
        .post(`/posts`, {
          title: title,
          metadescription: metadescription,
          body: body,
          categoria: categoria
        })
        .then(() => {
          alert("Cadastro realizado com Sucesso!");
          navigate("/admin/posts/");
        });
    }
  };

  return (
    <>
      <main className="container flex flex--centro">
        <article className="cartao post">
          <h2 className="titulo-pagina">Formulário de Posts</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <form onSubmit={CadPost}>
                <TextField
                  value={title}
                  onChange={(evento) => setTitle(evento.target.value)}
                  label="Título"
                  variant="filled"
                  fullWidth
                  required
                  margin="dense"
                />
                <TextField
                  value={metadescription}
                  onChange={(evento) => setMetadescription(evento.target.value)}
                  label="Subtítulo"
                  variant="filled"
                  fullWidth
                  required
                  margin="dense"
                />
                <br />
                <br />
                <label className="" for="descricao">
                  Descrição
                </label>
                <br />
                <textarea
                  className="textarea filled"
                  name="descricao"
                  id="descricao"
                  placeholder="Descrição"
                  rows="4"
                  value={body}
                  onChange={(evento) => setBody(evento.target.value)}
                ></textarea>
                <FormControl margin="dense" fullWidth>
                  <InputLabel id="select-categoria">Categoria</InputLabel>
                  <Select
                    labelId="select-categoria"
                    value={categoria}
                    onChange={(evento) => setCategoria(evento.target.value)}
                  >
                    {categorias.map((categoria) => (
                      <MenuItem key={categoria.id} value={categoria.id}>
                        {categoria.nome}
                      </MenuItem>
                    ))}
                  </Select>{" "}
                </FormControl>

                <br />

                <Button
                  sx={{ marginTop: 1 }}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Salvar
                </Button>
              </form>
            </Box>
          </Box>
        </article>
      </main>
    </>
  );
};

export default FormPost;
