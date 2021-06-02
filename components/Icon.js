import React, { useState, useEffect, useRef } from 'react';




const Icon = ({ name, size=16, fill="#000" }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../assets/img/${name}.svg`);
        ImportedIconRef.current = namedImport;
        // console.log(ImportedIconRef.current)
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} />;
  }

  return null;
};

export default Icon;