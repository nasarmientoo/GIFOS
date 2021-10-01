export const renderFavorites = () => {
    const html = `
    <div>
    Acá van los favoritos
    </div>
    <section class="trend-section"></section>`
    const favsContainer = document.createElement('div');
    favsContainer.innerHTML = html

    return favsContainer
}