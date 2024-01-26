class ProjectsSlider {
	constructor(projectsData, sourceNode) {
		this._projectsData = projectsData;
		this._sourceNode = sourceNode;

		this._projectsNumber = projectsData.length;
		this._selectedProject = 0;
		this._shiftStep = 100 / this._projectsNumber;
	}

	get _markup() {
		return `
        <section class="slider">
          <button class="slider__button slider__button--prev" type="button"></button>
    
          <div class="slider__outer-container">
            <div class="slider__inner-container">
  
              ${this._projectsData
								.map((itemData) => {
									return `
                  <div class="slider__item">
                    <img src="https://picsum.photos/340/300?random=${itemData.id}">
                  </div>`;
								})
								.join(``)}
  
            </div>
          </div>
    
          <button class="slider__button slider__button--next" type="button"></button>
        </section>`;
	}

	get _node() {
		const node = document.createElement(`template`);
		node.innerHTML = this._markup;

		return node.content;
	}

	_subscribe() {
		const [prevButton, nextButton] =
			this._slider.querySelectorAll(`.slider__button`);

		prevButton.addEventListener(`click`, this._switchProject);
		nextButton.addEventListener(`click`, this._switchProject);
	}

	_switchProject = (evt) => {
		evt.preventDefault();

		if (evt.target.classList.contains(`slider__button--next`)) {
			if (this._selectedProject + 1 < this._projectsNumber) {
				this._selectedProject++;
				const currentShift = this._selectedProject * this._shiftStep;

				this._projectsContainer.style.transform = `translateX(-${currentShift}%)`;
			}

			return;
		}

		if (this._selectedProject - 1 >= 0) {
			this._selectedProject--;
			const currentShift = this._selectedProject * this._shiftStep;

			this._projectsContainer.style.transform = `translateX(-${currentShift}%)`;
		}

		return;
	};

	render() {
		this._slider = this._node;

		this._projectsContainer = this._slider.querySelector(
			`.slider__inner-container `
		);
		this._projectsContainer.style.width = `${100 * this._projectsNumber}%`;

		this._subscribe();
		this._sourceNode.append(this._slider);
	}
}

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
new ProjectsSlider(data, document.querySelector(`.root`)).render();
