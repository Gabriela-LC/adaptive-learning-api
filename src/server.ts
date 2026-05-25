import "reflect-metadata";
import app from "./app";

const PORT = process.env.POSTGRES_PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
