"""atualizacao na coluna total_price em Order

Revision ID: 80007b2dfdbf
Revises: 699dddc049b2
Create Date: 2025-02-27 19:00:56.728074

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '80007b2dfdbf'
down_revision: Union[str, None] = '699dddc049b2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###
