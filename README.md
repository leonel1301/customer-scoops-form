# 🎨 Customer Scoops Form con React + TypeScript + Vite

Formulario que cuenta con diversos pasos donde el usuario puede ingresar datos de valor para la empresa.

## 🚀 Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Styled Components
- Framer Motion para animaciones

## 📁 Estructura del Proyecto

```bash
src/
├── components/     # Componentes reutilizables
├── animations/     # Configuraciones de animaciones
├── layouts/        # Componentes de diseño principales
├── theme/         # Configuración de temas y estilos globales
```

## ⚙️ Instalación y Configuración

1. Clona el repositorio:
```bash
git clone https://github.com/leonel1301/customer-scoops-form
cd tu-portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 💅 Enfoque de Maquetación

### Styled Components
El proyecto utiliza styled-components para la estilización, permitiendo:
- Componentes con estilos encapsulados
- Tema global consistente
- Estilos dinámicos basados en props
- Reutilización de estilos

Ejemplo de implementación:
```typescript
// src/theme/colors.ts
interface Colors {
    primary: string;
    secondary: string;
    basic: string;
  }
  
  const colors: Colors = {
    primary: '#231331',
    secondary: '#00CCBC',
    basic: '#000000',
  };
  
  export default colors;

// src/components/Button/Button.styles.ts
import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 4px;
`;
```

### Layouts
La estructura de layouts permite una organización modular:
- MainLayout: Estructura principal
- StepsLayout: Contenedor para las secciones principales

## 🎬 Animaciones

Las animaciones se implementan usando Framer Motion:

```typescript
// src/animations/fadeIn.ts
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Uso en componentes
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/fadeIn';

const AnimatedComponent = () => (
  
    Contenido animado
  
);
```

## 📱 Responsive Design

El diseño es completamente responsivo utilizando:
- Media queries personalizadas
- Sistema de grid flexible
- Unidades relativas (vh, %)
- Breakpoints consistentes

## 🚀 Scripts Disponibles

```bash
npm run dev        # Inicia servidor de desarrollo
npm run build      # Construye para producción
npm run lint       # Ejecuta el linter
npm run preview
```