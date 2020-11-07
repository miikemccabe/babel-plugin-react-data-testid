export default Sizes = ({ sizes, selected, onClickSize }) => (
  <ul className={styles.sizes}>
    {sizes.map(({ inStock, size, sku, sizeLabel }, index) => (
      <li key={size} value={size} data-sku={sku}>
        {inStock ? (
          <button
            type="button"
            onClick={event => {
              event.preventDefault();
              onClickSize(size);
            }}
            className={size === selected ? styles.selectedSize : ''}
            aria-label={`size ${sizeLabel}`}
          >
            {sizeLabel}
          </button>
        ) : (
          <div className={styles.disabled}>{sizeLabel}</div>
        )}
      </li>
    ))}
  </ul>
);
